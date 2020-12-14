<?php
namespace App\Admin\Libs;

class CustomActions extends \Encore\Admin\Grid\Displayers\Actions
{
    protected function renderView()
    {
        return null;
    }

    protected function renderEdit()
    {
        return <<<EOT
<a href="{$this->getResource()}/{$this->getKey()}/edit" class="btn btn-twitter">
    <i class="fa fa-edit"></i>
</a>
EOT;
    }

    protected function renderDelete()
    {
        parent::renderDelete();

        return <<<EOT
<a href="javascript:void(0);" data-id="{$this->getKey()}" class="grid-row-delete btn btn-danger">
    <i class="fa fa-trash"></i>
</a>
EOT;
    }
}
