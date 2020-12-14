<?php

namespace App\Admin\Controllers;

use App\Mine;
use App\Destination;
use App\Region;
use Encore\Admin\Admin;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;

class MineController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Шахты';

//    protected function index()
//    {
//        return Admin::content(function (Content $content) {
//
//            // optional
//            $content->header('page header');
//
//            // optional
//            $content->description('page description');
//
//            // add breadcrumb since v1.5.7
//            $content->breadcrumb(
//                ['text' => 'Dashboard', 'url' => '/admin'],
//                ['text' => 'User management', 'url' => '/admin/users'],
//                ['text' => 'Edit user']
//            );
//
//            // Fill the page body part, you can put any renderable objects here
//            $content->body('hello world');
//
//            // Add another contents into body
//            $content->body('foo bar');
//
//            // method `row` is alias for `body`
//            $content->row('hello world');
//
//            // Direct rendering view, Since v1.6.12
//            $content->view('dashboard', ['data' => 'foo']);
//        });
//    }
    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Mine());

        $grid->actions(function (Grid\Displayers\Actions $actions) {
            $actions->disableEdit();
        });

        $grid->column('id', '#');
        $grid->column('title', 'Название прерприятия')->style('padding: 0 1rem; vertical-align: middle;');;
        // set text, color, and stored values
        $states = [
            'on' => ['value' => 1, 'text' => 'Да', 'color' => 'primary'],
            'off' => ['value' => 0, 'text' => 'Нет', 'color' => 'default'],
        ];
        $grid->column('status', 'Отображение')->style('text-align: center; padding: 0 1rem; vertical-align: middle;')->switch($states);
        $grid->column('is_verified', 'Проверено')->style('text-align: center; padding: 0 1rem; vertical-align: middle;')->switch($states);
        $grid->column('owner', 'Владелец')->hide();
        $grid->column('person', 'Контактное лицо')->hide();
        $grid->column('address', 'Адрес')->style('-webkit-box-orient: vertical; display: block; display: -webkit-box; max-height: 46px;
    -webkit-line-clamp: 2; overflow: hidden; text-overflow: ellipsis;');
        $grid->column('latitude', 'Широта')->hide();
        $grid->column('longitude', 'Долгота')->hide();
        $grid->column('coal_type', 'Марка')->hide();
        $grid->column('rate', 'Добыча')->hide();
        $grid->column('phones', 'Телефоны')->display(function() {
            $html = '';
            if (!empty($this->phones)) {
                foreach((array) $this->phones as $phone) {
                    $html .="<div>$phone</div>";
                }
            }
            return $html;
        })->hide();
        $grid->column('railways', 'Ж/д сообщение')->options()->select([0 => 'Отсутствует', 1 => 'Собственные ж/д пути', 2 => 'Ж/Д пути находятся поблизости']);
        $grid->column('region.name', 'Регион');
//        $grid->column('created_at', 'Дата создания')->hide();
//        $grid->column('updated_at', 'Дата обновления')->hide();

        $grid->filter(function($filter){
            $filter->like('title', 'Название предприятия');
            $filter->in('railways', 'Ж/д сообщение')->select([null, 0 => 'Отсутствует', 1 => 'Собственные ж/д пути', 2 => 'Ж/Д пути находятся поблизости']);
            $filter->like('type.name', 'Тип');
            $filter->like('region.name', 'Регион');
        });

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Mine::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('title', __('Title'));
        $show->field('owner', __('Owner'));
        $show->field('person', __('Person'));
        $show->field('address', __('Address'));
        $show->field('latitude', __('Latitude'));
        $show->field('longitude', __('Longitude'));
        $show->field('phones', __('Phones'));
        $show->field('railways', __('Railways'));
        $show->field('region', __('Region'));
//        $show->field('created_at', __('Created at'));
//        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Mine());

        $form->footer(function ($footer) {

            $footer->disableReset();
            // disable `View` checkbox
            $footer->disableViewCheck();

            // disable `Continue editing` checkbox
            $footer->disableEditingCheck();

            // disable `Continue Creating` checkbox
            $footer->disableCreatingCheck();
        });

        $form->tools(function (Form\Tools $tools) {
            // Disable `Veiw` btn.
            $tools->disableView();
        });

        $form->tab('Основная информация', function($form) {
            $form->switch('status', 'Отображение');
            $form->switch('is_verified', 'Информация проверена');
            $form->text('title', 'Название предприятия');
            $form->text('owner', 'Владелец');

            $form->text('rate', ' Добыча угля');
            $form->text('coal_type', 'Марка');

        })->tab('Географическое положение', function($form) {
            $form->html(function() {
                return "<div>Получить координаты можно <a href='https://www.mapcoordinates.net/' target='_blank'>здесь</a></div>";
            });
            $form->text('latitude', 'Широта');
            $form->text('longitude', 'Долгота');
            $form->text('address', 'Адрес');
            $form->select('region_id', 'Область')->options(Region::all()->pluck('name', 'id'));
            $form->select('railways', 'Железные дороги')->options([0 => 'Отсутствует', 1 => 'Собственные ж/д пути', 2 => 'Ж/Д пути находятся поблизости']);
        })->tab('Контакты', function($form) {
            $form->text('person', 'Контактное лицо');
            $form->text('person_subtitle', 'Должность');
            $form->list('phones', 'Телефоны');
        })->tab('Транспортировка', function($form) {
            $form->hasMany('distances', 'Дистанции', function (Form\NestedForm $form) {
                $form->text('name', 'Пункт назначения');
                $form->text('distance', 'Дистанция');
            });
        });
        return $form;
    }
}
