const Employee = require("../lib/Employee1")

test("Can you set a name for the employee?", () => {
    const employee = new Employee("Elvis")

    expect(employee.name).toBe("Elvis");
});

test("Can you set an ID for the employee?", () => {
    const employee = new Employee("PeanutButter", 609);

    expect(employee.ID).toBe(609);
})

test("Can you set an  email for employee?", () => {
    const employee = new Employee("Eureka", 777, "eureka29@gmail.com");

    expect(employee.email).toBe("eureka29@gmail.com");
})
