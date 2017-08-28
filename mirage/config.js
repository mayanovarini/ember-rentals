export default function() {
  this.namespace = '/api';

  let rentals = [{
      type: 'rentals',
      id: 'cute-giethoorn-house',
      attributes: {
        title: 'Cute Giethoorn House',
        owner: 'Maya van Novarini',
        city: 'Giethoorn',
        "property-type": 'Estate',
        bedrooms: 15,
        image: 'http://i.dailymail.co.uk/i/pix/2015/11/21/10/2E9A033D00000578-3328179-image-a-1_1448101423986.jpg',
        description: "This for rent luxurious and spacious recreation houseboat for 4 people is located on the Cornelisgracht with an unobstructed view to the national park, the Weerribben-Wieden, just a few kilometers from the tourist center of Giethoorn."
      }
    }, {
      type: 'rentals',
      id: 'barcelona-living',
      attributes: {
        title: 'Barcelona Living',
        owner: 'Marek Dzikowicz',
        city: 'Barcelona',
        "property-type": 'Condo',
        bedrooms: 1,
        image: 'http://www.mdproperties.pl/photos/ofs_10/offer_1072395/33780304_2000_2000_1_0_0.jpg',
        description: "Amazing property combines modernity with nature. Large terraces, huge garden, private pool, quiet and amazing landscape around, yet access to all facilities at the Resort. Restaurants, spa, tennis courts, but most importantly the best golf course in Spain, in the vicinity of your house, do you want more? Mountains and the sea ... a 30 minute drive to Barcelona's beaches, 30 minutes drive to the best Pyrenean ski-resorts of Andorra."
      }
    }, {
      type: 'rentals',
      id: 'downtown-charm-edina',
      attributes: {
        title: 'Downtown Charm in Edina',
        owner: 'Noodles daBombsky',
        city: 'Edina',
        "property-type": 'Apartment',
        bedrooms: 3,
        image: 'https://photos.zillowstatic.com/p_e/ISizuqir4mqe3l1000000000.jpg',
        description: "Luxury condo located on the southeast corner of the complex with private balcony. Premier corner unit with contemporary elegance and attention to detail in every room. Hardwood floors, professional grade appliances, extensive custom cabinetry, kitchen with center island. Owner's suite with (2) walk-in closets, separate tub and shower. Two parking stalls in heated garage. Walk to Edina Theatre, restaurants, Lunds & shops."
      }
    }];

  this.get('/rentals', function(db, request) {
    if(request.queryParams.city !== undefined) {
      let filteredRentals = rentals.filter(function(i) {
        return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return { data: filteredRentals };
    } else {
      return { data: rentals };
    }
  });

  // Find and return the provided rental from our rental list above
  this.get('/rentals/:id', function (db, request) {
    return { data: rentals.find((rental) => request.params.id === rental.id) };
  });

}
