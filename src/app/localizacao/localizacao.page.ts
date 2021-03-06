import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { ArgumentOutOfRangeError } from 'rxjs';

declare var google: any;

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.page.html',
  styleUrls: ['./localizacao.page.scss'],
})
export class LocalizacaoPage implements OnInit {

  constructor(private loadCtrl: LoadingController) {
      this.getLocation();
  }

   public latitude: number = 0;
   public longitude: number = 0;

   public async getLocation(){
     await Geolocation.getCurrentPosition( {enableHighAccuracy: true, timeout: 5000, maximumAge: 0} ).then(resp => {
       this.latitude = resp.coords.latitude;
       this.longitude = resp.coords.longitude;
     }).catch( err => {
       console.log(err.message);
     });
   }

  map: any;

  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;

  marker: any = {
    title: 'HostCheff',
    latitude: this.latitude,
    longitude: this.longitude
  }

  addMarkerToMap(marker){
    const position = new google.maps.LatLng( marker.latitude, marker.longitude );
    const mapMarker = new google.maps.Marker({
      position: position,
      title: marker.title,
      latitude: marker.latitude,
      longitude: marker.longitude
    });
    mapMarker.setMap(this.map);
  }
  
  showMap(){
    const location = new google.maps.LatLng( this.latitude, this.longitude );
    const options = {
      center: location,
      zoom: 17,
    }
    this.map = new google.maps.Map( this.mapRef.nativeElement, options);
    this.addMarkerToMap(this.marker);
  }
  
  public async loadingMap(){
    const loadingMap = await this.loadCtrl.create({
      message: "Por favor, aguarde..",
      duration: 1500
    });
    await loadingMap.present();
    await this.showMap();
  } 
  
  ngOnInit() {
    this.loadingMap();
  }

}
