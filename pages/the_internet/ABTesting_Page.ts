import { expect, type Locator, type Page } from '@playwright/test';
import  {BrowserAction} from "../../utils/BrowserAction"  ;
import {TheInternet_Home_Page} from './TheInternet_Home_Page'

export class ABTesting {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
   
  }

  async goto() {
   BrowserAction.goto(this.page,"https://the-internet.herokuapp.com/abtest")
   return this;
  }

  async goBack(){
   await BrowserAction.goBack(this.page);
    return new TheInternet_Home_Page(this.page);
  }
  async title(){
    return BrowserAction.getPageTitle(this.page);
  }

 }