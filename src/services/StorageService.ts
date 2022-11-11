import {NativeStorage} from "@awesome-cordova-plugins/native-storage";
import {Trip} from "../types";

declare let window: any;

export class StorageService {
  static async getData(key: string, defaultValue: any) {
    try {
      if (window.cordova) {
        return await NativeStorage.getItem(key);
      } else {
        const stored = localStorage.getItem(key);
        if (stored === null) throw "Invalid data";
        return await JSON.parse(stored);
      }
    } catch (e) {
      return defaultValue;
    }
  }

  static setData(key: string, value: any) {
    if (window.cordova) {
      return NativeStorage.setItem(key, value);
    } else {
      return localStorage.setItem(key, JSON.stringify(value));
    }
  }

  static async getAllTrips() {
    return (await this.getData('trips', [])) as Trip[];
  }

  static async addTrip(newTrip: Trip) {
    const trips = await this.getAllTrips();
    trips.push(newTrip);
    this.setData('trips', trips);
    return trips;
  }
}
