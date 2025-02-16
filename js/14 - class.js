class Employee {
  constructor(
    firstName,
    lastName,
    employeeId,
    payPerHour,
    entranceDate,
    coupon,
    hasInsurance,
    paymentDate,
    position
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.employeeId = employeeId;
    this.payPerHour = payPerHour;
    this.entranceDate = entranceDate;
    this.coupon = coupon;
    this.hasInsurance = hasInsurance;
    this.paymentDate = paymentDate;
    this.position = position;
  }

  getCoupon() {
    return this.coupon;
  }
}

class PartTimeEmployee extends Employee {
  constructor(workingHours) {
    this.workingHours = workingHours;
  }

  getSalary() {
    return this.workingHours * this.payPerHour;
  }
}

class FullTimeEmployee extends Employee {
  constructor(baseSalary, overTime) {
    this.baseSalary = baseSalary;
    this.overTime = overTime;
  }

  getSalary() {
    return this.baseSalary + this.overTime * this.payPerHour;
  }
}
