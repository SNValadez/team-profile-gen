const Manager = require("../lib/Manager1")

test("Can you set a name for the manager?", () => {
    const manager = new Manager("Marv")

    expect(manager.name).toBe("Marv");
});

test("Can you set an ID for the manager?", () => {
    const manager = new Manager("Colonel Sanders", 270);

    expect(manager.ID).toBe(270);
})

test("Can you set an  email for manager?", () => {
    const manager = new Manager("NinjaGotLigma", -8, "prayforligmachildren1@gmail.com");

    expect(manager.email).toBe("prayforligmachildren1@gmail.com");
})

test("Can you set an office number for manager?", () => {
    const manager = new Manager("Chungys", 1, "busybeemanager1@gmail.com", 690);

    expect(manager.officeNumber).toBe(690);
});