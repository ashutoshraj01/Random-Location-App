// for starting project --> parcel index.html
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './customMaps';

const customMap = new CustomMap('map');
const user = new User();
const company = new Company();

customMap.addMarker(user);
customMap.addMarker(company);