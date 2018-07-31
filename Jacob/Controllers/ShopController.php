<?php
/**
 * Jakub "Jacob" Kadzielawa
 * programujemy.net
 * 25.03.17
 */

namespace Jacob\Controllers;
use Jacob\Core\Controller;
use Jacob\Helper\Twitter;
class ShopController extends Controller
{
    protected $connection;

    public function indexAction()
    {
           $this->view->render();
    }



}