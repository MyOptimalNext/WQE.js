class RxGate {
    constructor(theta) {
        this.name = "Rx Gate";
        this.type = "Rotation";
        this.theta = theta; // الزاوية التي يتم من خلالها تدوير الكيوبت
    }

    // تطبيق البوابة على الكيوبت
    apply(qubit) {
        // حساب الأجزاء الحقيقية والتخيلية بعد تطبيق التدوير على طول محور X
        let realPart = Math.cos(this.theta / 2) * qubit.real - Math.sin(this.theta / 2) * qubit.imaginary;
        let imaginaryPart = Math.sin(this.theta / 2) * qubit.real + Math.cos(this.theta / 2) * qubit.imaginary;
        
        return { real: realPart, imaginary: imaginaryPart };
    }
}

module.exports = RxGate;