import { expect, type Locator, type Page } from '@playwright/test';
import  {BrowserAction} from "../../utils/BrowserAction"  ;
import {ABTesting} from './ABTesting_Page'

export class TheInternet_Home_Page {
  readonly page: Page;
  readonly aBLink: Locator;
  readonly gettingStartedHeader: Locator;
  readonly pomLink: Locator;
  readonly tocList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.aBLink = page.locator("a[href='/abtest']");
    // this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });
    // this.pomLink = page.locator('li', {
    //   hasText: 'Guides',
    // }).locator('a', {
    //   hasText: 'Page Object Model',
    // });
    // this.tocList = page.locator('article div.markdown ul > li > a');
  }

  async goto() {
   BrowserAction.goto(this.page,"https://the-internet.herokuapp.com/")
   return this;
  }

  async navigateToAB() {
    await this.aBLink.first().click();
    return new ABTesting(this.page);
  }
  async title(){
    return BrowserAction.getPageTitle(this.page);
  }

 }