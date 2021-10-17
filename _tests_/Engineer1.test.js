const Engineer = require("../lib/Engineer1")

test("Can you set a name for the engineer?", () => {
    const engineer = new Engineer("Blake")

    expect(engineer.name).toBe("Blake");
});

test("Can you set an ID for the engineer?", () => {
    const engineer = new Engineer("Pistachio", 650);

    expect(engineer.ID).toBe(650);
})

test("Can you set an  email for engineer?", () => {
    const engineer = new Engineer("Eureka", 2, "busybeeengineer1@gmail.com");

    expect(engineer.email).toBe("busybeeengineer1@gmail.com");
})

test("Can you set a github for engineer?", () => {
    const engineer = new Engineer("Eureka", 2, "busybeeengineer1@gmail.com", "Github User");

    expect(engineer.github).toBe("Github User");
})