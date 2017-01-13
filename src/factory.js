function buildPin(type, name, description, latlng, owner, isVassal) {
    switch (type) {
        case 1:
            return new Hameau(name, description, latlng, type, owner, isVassal);
        case 2:
            return new PetitVillage(name, description, latlng, type, owner, isVassal);
        case 3:
            return new Village(name, description, latlng, type, owner, isVassal);
        case 4:
            return new PetiteBourgade(name, description, latlng, type, owner, isVassal);
        case 5:
            return new Bourgade(name, description, latlng, type, owner, isVassal);
        case 6:
        case 7:
            return new PetitBourg(name, description, latlng, type, owner, isVassal);
        case 8:
        case 9:
            return new Bourg(name, description, latlng, type, owner, isVassal);
        case 10:
        case 11:
            return new GrandBourg(name, description, latlng, type, owner, isVassal);
        case 12:
        case 13:
            return new Ville(name, description, latlng, type, owner, isVassal);
        case 14:
        case 15:
        case 16:
        case 17:
            return new GrandeVille(name, description, latlng, type, owner, isVassal);
        case 'tourBois':
            return new TourBois(name, description, latlng, owner);
        case 'tourPierre':
            return new TourPierre(name, description, latlng, owner);
        case 'chateau':
            return new Chateau(name, description, latlng);
        case 'magic':
            return new Magic(name, description, latlng);
        default:
            return new Pin(name, description, latlng);
    }
}