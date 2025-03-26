import {test,expect} from "@playwright/test";
import {TheInternet_Home_Page} from '../../pages/the_internet/TheInternet_Home_Page';


test('test titles', async ({page}) => {
 
   const theInternet = new TheInternet_Home_Page(page);
   await theInternet.goto();
   const abtest= await theInternet.navigateToAB()
    await expect.soft(page).toHaveTitle("A/B Test");
    await abtest.goBack();
    await expect.soft(page).toHaveTitle("The Internet");
});