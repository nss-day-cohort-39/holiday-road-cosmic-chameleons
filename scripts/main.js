import { getAttractions } from './attractions/AttractionDataProvider.js'
import { getEateries } from './eateries/EateryDataProvider.js'
import { ItineraryForm } from './itineraries/ItineraryForm.js'
import { getParks } from './parks/ParkDataProvider.js'
import { EaterySelected } from './preview/ItineraryPreview.js'

getParks()
  .then(getEateries)
  .then(getAttractions)
  .then(ItineraryForm)
  .then(EaterySelected)
