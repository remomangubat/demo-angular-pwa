export class WeatherInfo {
    public name: string;
    desc: string;
    temp: string;

    constructor(
        private p_name: string,
        private p_desc: string,
        private p_temp: string
    ){
        this.name = p_name;
        this.desc = p_desc;
        this.temp = p_temp;
    }
        
}