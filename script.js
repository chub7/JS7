// Лампочка. Возможные методы: ввод информации о лампочке (мощность, стоимость
//     электроэнергии), вкл./выкл. лампочки, получение расхода за горение лампочки,
//     счетчик горения лампочки.


let BulbLight = function(){

    this.get = function(){
        this.power = +prompt(`Введите мощнать лампочи в Ваттах `) / 1000;
        this.price = +prompt(`Введите стоимость киловатт-час в формате Number.Number+`); 

        this.onBulb();
    }
    this.onBulb = function(){
        this.statusOn = confirm(`Нажмите ОК для включения лампочки`)
        if (this.statusOn) {
            
            this.timeOnForMin = Date.now();
        } else { this.errorBublWasntOn }
        this.offBulb ();
    }
    this.offBulb = function(){
        this.statusOff = confirm(`Нажмите ОК для выключения лампочки`)
        if (this.statusOff) {
            this.timeOnForMin = (Date.now() - this.timeOnForMin) / 60000 ; 
            
        } else { this.errorBublWasntOff()}

        this.kWhours();
    }
    this.kWhours = function(){
        this.kWh = this.power * this.timeOnForMin
        
        this.totalCalc ();
    }
    this.totalCalc = function(){
       this.totalCost = this.kWh * this.price;
       this.printInfo();
    }
    this.printInfo = function (){
        alert(`Мощность лампочки в киловатах ${this.power}
               Время горения в минутах ${this.timeOnForMin}
               Стоимость киловатт-часа электроэнергии ${this.price}
               Стоимость горения этой лапочки за ${this.timeOnForMin} минут 
               равняется ${this.totalCost} 
                `)

    }

    this.errorBublWasntOn = function (){
        alert(`Вы не включили лампочку`)
        this.onBulb();
    }
    this.errorBublWasntOff = function (){
        alert(`Вы не вылючили лампочку`)
        this.offBulb();
    }
}

let livingRoomLightBulb = new BulbLight();

livingRoomLightBulb.get();