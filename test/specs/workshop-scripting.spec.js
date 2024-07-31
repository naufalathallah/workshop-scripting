describe("Deskripsi Fitur", () => {
  it("[key: TCID] Judul Test Case", async () => {
    await $(loginPage.jpopsRekamMedis).click();

    expect($(rekamMedisPage.pageRekamMedis)).toBeDisplayed();
    expect($(rekamMedisPage.cardRekamMedisBaby)).toBeDisplayed();
  });
});
