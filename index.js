"use strict";var data=new WeakSet;data.add({deoord:"e74f3eb7-d8d6-11e6-b16a-3f7d8b2f5214"});data.add({odo:"2ea9e28a-d8e3-11e6-b16a-1bb5d129a9b5"});data.add({lothar:"0d2ad688-d8ff-11e6-b16a-e75545913121"});data.add({other:"cc73111d-d8d7-11e6-b16a-89aa9fe53353"});
'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}var Pin=function(){function Pin(name,description,latlng){_classCallCheck(this,Pin);this.name=name;this.description=description;this.latlng=latlng;this.width=55;this.height=55;this.icon='icons/ghost.png'}_createClass(Pin,[{key:'getMarker',value:function getMarker(){var marker=L.marker(this.latlng,{icon:_buildIcon()});var tooltip=L.tooltip({direction:'bottom'});marker.bindTooltip(tooltip).setTooltipContent(this.name);marker.bindPopup(L.popup().setContent(this.description));return marker}},{key:'_buildIcon',value:function _buildIcon(){return L.divIcon({html:this._getHtml(),iconSize:[this.width,this.height],iconAnchor:[this.width/2,this.height],popupAnchor:[0,-this.height],className:'icon'})}},{key:'_getHtml',value:function _getHtml(){return'<img src="'+this.icon+'" width="'+this.width+'" height="'+this.height+'">'}}]);return Pin}();// 
// Pin
var Chateau=function(_Pin){_inherits(Chateau,_Pin);function Chateau(name,description,latlng){_classCallCheck(this,Chateau);var _this=_possibleConstructorReturn(this,(Chateau.__proto__||Object.getPrototypeOf(Chateau)).call(this,name,description,latlng));_this.width=60;_this.height=57;_this.icon='icons/chateau.png';return _this}return Chateau}(Pin);var Magic=function(_Pin2){_inherits(Magic,_Pin2);function Magic(name,description,latlng){_classCallCheck(this,Magic);var _this2=_possibleConstructorReturn(this,(Magic.__proto__||Object.getPrototypeOf(Magic)).call(this,name,description,latlng));_this2.width=40;_this2.height=53;_this2.icon='icons/compotier.png';return _this2}return Magic}(Pin);
'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}// 
// Pin
var Fief=function(_Pin){_inherits(Fief,_Pin);function Fief(name,description,latlng,pop,owner){_classCallCheck(this,Fief);var _this=_possibleConstructorReturn(this,(Fief.__proto__||Object.getPrototypeOf(Fief)).call(this,name,description,latlng));_this.pop=pop;_this.owner=owner;_this.isVassal=isVassal;return _this}_createClass(Fief,[{key:'_getHtml',value:function _getHtml(){var icon=this.isVassal?this.icon.replace(/(\.[\w\d_-]+)$/i,'_v$1'):this.icon;return'<img src="'+this.icon+'" width="'+this.width+'" height="'+this.height+'"><img src="blasons/'+owner+'.png" class="blason">'}}]);return Fief}(Pin);// 
// Fief
var VillageFief=function(_Fief){_inherits(VillageFief,_Fief);function VillageFief(name,description,latlng,pop,owner,isVassal){_classCallCheck(this,VillageFief);var _this2=_possibleConstructorReturn(this,(VillageFief.__proto__||Object.getPrototypeOf(VillageFief)).call(this,name,description,latlng,pop,owner,isVassal));_this2.icon='icons/village.png';_this2.width=40;_this2.height=49;_this2.chevaliers=0;return _this2}return VillageFief}(Fief);var BourgFief=function(_Fief2){_inherits(BourgFief,_Fief2);function BourgFief(name,description,latlng,pop,owner,isVassal){_classCallCheck(this,BourgFief);var _this3=_possibleConstructorReturn(this,(BourgFief.__proto__||Object.getPrototypeOf(BourgFief)).call(this,name,description,latlng,pop,owner,isVassal));_this3.icon='icons/bourg.png';_this3.width=65;_this3.height=54;return _this3}return BourgFief}(Fief);var VilleFief=function(_Fief3){_inherits(VilleFief,_Fief3);function VilleFief(name,description,latlng,pop,owner,isVassal){_classCallCheck(this,VilleFief);var _this4=_possibleConstructorReturn(this,(VilleFief.__proto__||Object.getPrototypeOf(VilleFief)).call(this,name,description,latlng,pop,owner,isVassal));_this4.icon='icons/ville.png';_this4.width=70;_this4.height=71;return _this4}return VilleFief}(Fief);// 
// VillageFief
var Hameau=function(_VillageFief){_inherits(Hameau,_VillageFief);function Hameau(name,description,latlng,pop,owner,isVassal){_classCallCheck(this,Hameau);var _this5=_possibleConstructorReturn(this,(Hameau.__proto__||Object.getPrototypeOf(Hameau)).call(this,name,description,latlng,pop,owner,isVassal));_this5.soldats=0;_this5.garnison=2;return _this5}return Hameau}(VillageFief);var PetitVillage=function(_VillageFief2){_inherits(PetitVillage,_VillageFief2);function PetitVillage(name,description,latlng,pop,owner,isVassal){_classCallCheck(this,PetitVillage);var _this6=_possibleConstructorReturn(this,(PetitVillage.__proto__||Object.getPrototypeOf(PetitVillage)).call(this,name,description,latlng,pop,owner,isVassal));_this6.soldats=2;_this6.garnison=5;return _this6}return PetitVillage}(VillageFief);var Village=function(_VillageFief3){_inherits(Village,_VillageFief3);function Village(name,description,latlng,pop,owner,isVassal){_classCallCheck(this,Village);var _this7=_possibleConstructorReturn(this,(Village.__proto__||Object.getPrototypeOf(Village)).call(this,name,description,latlng,pop,owner,isVassal));_this7.soldats=3;_this7.garnison=5;return _this7}return Village}(VillageFief);var PetiteBourgade=function(_VillageFief4){_inherits(PetiteBourgade,_VillageFief4);function PetiteBourgade(name,description,latlng,pop,owner,isVassal){_classCallCheck(this,PetiteBourgade);var _this8=_possibleConstructorReturn(this,(PetiteBourgade.__proto__||Object.getPrototypeOf(PetiteBourgade)).call(this,name,description,latlng,pop,owner,isVassal));_this8.soldats=5;_this8.garnison=10;return _this8}return PetiteBourgade}(VillageFief);var Bourgade=function(_VillageFief5){_inherits(Bourgade,_VillageFief5);function Bourgade(name,description,latlng,pop,owner,isVassal){_classCallCheck(this,Bourgade);var _this9=_possibleConstructorReturn(this,(Bourgade.__proto__||Object.getPrototypeOf(Bourgade)).call(this,name,description,latlng,pop,owner,isVassal));_this9.soldats=5;_this9.garnison=10;_this9.chevaliers=1;return _this9}return Bourgade}(VillageFief);// 
// BourgFief
var PetitBourg=function(_BourgFief){_inherits(PetitBourg,_BourgFief);function PetitBourg(name,description,latlng,pop,owner,isVassal){_classCallCheck(this,PetitBourg);var _this10=_possibleConstructorReturn(this,(PetitBourg.__proto__||Object.getPrototypeOf(PetitBourg)).call(this,name,description,latlng,pop,owner,isVassal));_this10.soldats=15;_this10.garnison=20;_this10.chevaliers=2;return _this10}return PetitBourg}(BourgFief);var Bourg=function(_BourgFief2){_inherits(Bourg,_BourgFief2);function Bourg(name,description,latlng,pop,owner,isVassal){_classCallCheck(this,Bourg);var _this11=_possibleConstructorReturn(this,(Bourg.__proto__||Object.getPrototypeOf(Bourg)).call(this,name,description,latlng,pop,owner,isVassal));_this11.soldats=25;_this11.garnison=40;_this11.chevaliers=4;return _this11}return Bourg}(BourgFief);var GrandBourg=function(_BourgFief3){_inherits(GrandBourg,_BourgFief3);function GrandBourg(name,description,latlng,pop,owner,isVassal){_classCallCheck(this,GrandBourg);var _this12=_possibleConstructorReturn(this,(GrandBourg.__proto__||Object.getPrototypeOf(GrandBourg)).call(this,name,description,latlng,pop,owner,isVassal));_this12.soldats=35;_this12.garnison=80;_this12.chevaliers=6;return _this12}return GrandBourg}(BourgFief);// 
// VilleFief
var Ville=function(_VilleFief){_inherits(Ville,_VilleFief);function Ville(name,description,latlng,pop,owner,isVassal){_classCallCheck(this,Ville);var _this13=_possibleConstructorReturn(this,(Ville.__proto__||Object.getPrototypeOf(Ville)).call(this,name,description,latlng,pop,owner,isVassal));_this13.soldats=50;_this13.garnison=120;_this13.chevaliers=9;return _this13}return Ville}(VilleFief);var GrandeVille=function(_VilleFief2){_inherits(GrandeVille,_VilleFief2);function GrandeVille(name,description,latlng,pop,owner,isVassal){_classCallCheck(this,GrandeVille);var _this14=_possibleConstructorReturn(this,(GrandeVille.__proto__||Object.getPrototypeOf(GrandeVille)).call(this,name,description,latlng,pop,owner,isVassal));_this14.soldats=65;_this14.garnison=160;_this14.chevaliers=12;return _this14}return GrandeVille}(VilleFief);
'use strict';function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}// 
// Pin
var Defense=function(_Pin){_inherits(Defense,_Pin);function Defense(name,description,latlng,owner){_classCallCheck(this,Defense);var _this=_possibleConstructorReturn(this,(Defense.__proto__||Object.getPrototypeOf(Defense)).call(this,name,description,latlng));_this.owner=owner;_this.height=57;return _this}return Defense}(Pin);// 
// Defense
var TourBois=function(_Defense){_inherits(TourBois,_Defense);function TourBois(name,description,latlng,owner){_classCallCheck(this,TourBois);var _this2=_possibleConstructorReturn(this,(TourBois.__proto__||Object.getPrototypeOf(TourBois)).call(this,name,description,latlng,owner));_this2.width=18;_this2.icon='icons/tourBois.png';return _this2}return TourBois}(Defense);var TourPierre=function(_Defense2){_inherits(TourPierre,_Defense2);function TourPierre(name,description,latlng,owner){_classCallCheck(this,TourPierre);var _this3=_possibleConstructorReturn(this,(TourPierre.__proto__||Object.getPrototypeOf(TourPierre)).call(this,name,description,latlng,owner));_this3.width=36;_this3.icon='icons/tourPierre.png';return _this3}return TourPierre}(Defense);
'use strict';function buildPin(type,name,description,latlng,owner,isVassal){switch(type){case 1:return new Hameau(name,description,latlng,type,owner,isVassal);case 2:return new PetitVillage(name,description,latlng,type,owner,isVassal);case 3:return new Village(name,description,latlng,type,owner,isVassal);case 4:return new PetiteBourgade(name,description,latlng,type,owner,isVassal);case 5:return new Bourgade(name,description,latlng,type,owner,isVassal);case 6:case 7:return new PetitBourg(name,description,latlng,type,owner,isVassal);case 8:case 9:return new Bourg(name,description,latlng,type,owner,isVassal);case 10:case 11:return new GrandBourg(name,description,latlng,type,owner,isVassal);case 12:case 13:return new Ville(name,description,latlng,type,owner,isVassal);case 14:case 15:case 16:case 17:return new GrandeVille(name,description,latlng,type,owner,isVassal);case'tourBois':return new TourBois(name,description,latlng,owner);case'tourPierre':return new TourPierre(name,description,latlng,owner);case'chateau':return new Chateau(name,description,latlng);case'magic':return new Magic(name,description,latlng);default:return new Pin(name,description,latlng);}}
'use strict';$('#map').height(window.innerHeight-20);var map=L.map('map',{minZoom:7,maxZoom:7}).setView([18.15629,34.67285],7);L.imageOverlay('somerset.png',[[0,0],[42.28,55]]).addTo(map);map.on('contextmenu',function(ev){window.prompt('Copy to clipboard: Ctrl+C, Enter',ev.latlng.lat.toFixed(3)+','+ev.latlng.lng.toFixed(3))});$.each(data,function(owner,code){$.ajax({type:'GET',url:'https://jsonblob.com/api/jsonBlob/'+code,contentType:'application/json; charset=utf-8',dataType:'json',success:function success(json){$.each(json,function(index,data){if(data.v!=null&&data.v===true){var _pin=buildPin(data.type,data.name,data.description,data.latlng,owner,true)}else{var _pin2=buildPin(data.type,data.name,data.description,data.latlng,owner)}pin.getMarker().addTo(map)})}})});