import { test, expect } from "@playwright/test";
import { DemoCF_Page } from "../../pages/demo_Contract_Form/DemoCF_Page";

test('DemoCF test', async ({ page }) => {

    const demoCF = new DemoCF_Page(page);
    await demoCF.goto();
    await demoCF.filltextInput("test");
    await demoCF.fillpasswordInput("test");
    await demoCF.filltextArea("test");
    await demoCF.selectdropdown("One");
    await demoCF.selectDate("31");
    await demoCF.selectCheckBox();
    await demoCF.submit();
    await expect(demoCF.successMessage).toBeVisible();
});