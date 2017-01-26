function buildPin (data, ratio) {
  let name = data.name
  let description = data.description !== undefined ? data.description : ''
  let latlng = [data.lat, data.lng]
  let type = data.type
  let owner = data.owner !== undefined ? data.owner.fields.name : ''
  let vassal = data.vassal
  switch (type) {
    case 1:
      return new Hameau(name, description, latlng, ratio, type, owner, vassal)
    case 2:
      return new PetitVillage(name, description, latlng, ratio, type, owner, vassal)
    case 3:
      return new Village(name, description, latlng, ratio, type, owner, vassal)
    case 4:
      return new PetiteBourgade(name, description, latlng, ratio, type, owner, vassal)
    case 5:
      return new Bourgade(name, description, latlng, ratio, type, owner, vassal)
    case 6:
    case 7:
      return new PetitBourg(name, description, latlng, ratio, type, owner, vassal)
    case 8:
    case 9:
      return new Bourg(name, description, latlng, ratio, type, owner, vassal)
    case 10:
    case 11:
      return new GrandBourg(name, description, latlng, ratio, type, owner, vassal)
    case 12:
    case 13:
      return new Ville(name, description, latlng, ratio, type, owner, vassal)
    case 14:
    case 15:
    case 16:
    case 17:
      return new GrandeVille(name, description, latlng, ratio, type, owner, vassal)
    case 'woodTower':
      return new TourBois(name, description, latlng, ratio, owner)
    case 'stoneTower':
      return new TourPierre(name, description, latlng, ratio, owner)
    case 'castle':
      return new Chateau(name, description, latlng, ratio)
    case 'magic':
      return new Magic(name, description, latlng, ratio)
    case 'abbey':
      return new Abbaye(name, description, latlng, ratio)
    default:
      return new Pin(name, description, latlng, ratio)
  }
}
