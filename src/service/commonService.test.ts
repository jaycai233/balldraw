import commonService from "./commonService";

test('check Ball Max', ()=> {
    jest.spyOn(global.Math, 'random').mockReturnValue(1);
    const number = commonService.getOneRandomNumberInRange(80, 1);
    console.log(number);
    expect(number).toBe(80);
})

test('check Ball Max', ()=> {
    jest.spyOn(global.Math, 'random').mockReturnValue(0);
    const number = commonService.getOneRandomNumberInRange(80, 1);
    console.log(number);
    expect(number).toBe(1);
})