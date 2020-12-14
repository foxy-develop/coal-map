<?php

namespace App\Admin\Controllers;

use App\CoilObjectType;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class CoilObjectTypeController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Типы обьектов';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new CoilObjectType());

        $grid->actions(function (Grid\Displayers\Actions $actions) {
            $actions->disableEdit();
        });

        $grid->column('id', '#')->width(50);
        $grid->column('name', 'Название')->style('width:100%');
        $grid->column('icon', 'Иконка')->display(function() {
            return "<div class='card__icon' style='background-color: $this->color'> $this->icon </div>";
        })->style('min-width: 90px');


//        $grid->column('icon', 'Иконка');

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
        $show = new Show(CoilObjectType::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('Name'));
        $show->field('color', __('Color'));
        $show->field('icon', __('Icon'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new CoilObjectType());
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
        $form->text('name', 'Название');
        $form->color('color', 'Цвет');
        $form->textarea('icon', 'Иконка');
        $form->html(function() {
            return "<div class='card__icon card__icon--big' style='background-color: $this->color'> $this->icon </div>";
        });

        return $form;
    }
}
