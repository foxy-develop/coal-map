<?php

namespace App\Admin\Controllers;

use App\Destination;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Show;

class DestinationController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = 'Пунккты назначения';

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new Destination());

        $grid->actions(function (Grid\Displayers\Actions $actions) {
            $actions->disableEdit();
        });

        $grid->column('id', '#');
        $grid->column('name', 'Название')->style('width: 100%');
        $grid->column('sort_order', 'Позиция');

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
        $show = new Show(Destination::findOrFail($id));

        $show->field('id', '#');
        $show->field('name', 'Название');
        $show->field('sort_order', 'Позиция');

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new Destination());

        $form->text('name', 'Название');
        $form->number('sort_order', 'Позиция');

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

        return $form;
    }
}
