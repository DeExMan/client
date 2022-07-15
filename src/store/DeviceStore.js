import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Смартфон"},
            {id: 3, name: "Ноутбуки"},
            {id: 4, name: "Телевизоры"}, 
        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"},
            {id: 3, name: "Nokia"},
            {id: 4, name: "YoPhone"},
            {id: 5, name: "Lenova"},
            {id: 6, name: "Asus"},
            
        ]
        this._devices = [
            {id: 1, name: "Iphon 12", price: 25000, rating: 5, img: 'https://www.upcomingfloats.com.au/wp-content/uploads/2015/03/placeholder-400x300.jpg'},
            {id: 2, name: "Iphon 12", price: 25000, rating: 5, img: 'https://www.upcomingfloats.com.au/wp-content/uploads/2015/03/placeholder-400x300.jpg'},
            {id: 3, name: "Iphon 12", price: 25000, rating: 5, img: 'https://www.upcomingfloats.com.au/wp-content/uploads/2015/03/placeholder-400x300.jpg'},
            {id: 4, name: "Iphon 12", price: 25000, rating: 5, img: 'https://www.upcomingfloats.com.au/wp-content/uploads/2015/03/placeholder-400x300.jpg'},
            {id: 5, name: "Iphon 12", price: 25000, rating: 5, img: 'https://www.upcomingfloats.com.au/wp-content/uploads/2015/03/placeholder-400x300.jpg'},
            {id: 6, name: "Iphon 12", price: 25000, rating: 5, img: 'https://www.upcomingfloats.com.au/wp-content/uploads/2015/03/placeholder-400x300.jpg'},
            {id: 7, name: "Iphon 12", price: 25000, rating: 5, img: 'https://www.upcomingfloats.com.au/wp-content/uploads/2015/03/placeholder-400x300.jpg'},
            {id: 8, name: "Iphon 12", price: 25000, rating: 5, img: 'https://www.upcomingfloats.com.au/wp-content/uploads/2015/03/placeholder-400x300.jpg'},
            {id: 9, name: "Iphon 12", price: 25000, rating: 5, img: 'https://www.upcomingfloats.com.au/wp-content/uploads/2015/03/placeholder-400x300.jpg'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }
    
    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }

}