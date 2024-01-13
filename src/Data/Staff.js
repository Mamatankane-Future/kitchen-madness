import ChefProfile1 from '../Assets/chefprofile1.png';
import ChefProfile2 from '../Assets/chefprofile2.png';
import ChefProfile3 from '../Assets/chefprofile3.png';
import ChefProfile4 from '../Assets/chefprofile4.png';

import ChefImg1 from '../Assets/chef1.png';
import ChefImg2 from '../Assets/chef2.png';
import ChefImg3 from '../Assets/chef3.png';
import ChefImg4 from '../Assets/chef4.png';

class Staff{
    constructor(name, role, img, description, profile) {
        this.name = name;
        this.role = role;
        this.img = img;
        this.description = description;
        this.profile = profile;
    }

    initialiseState(state){
        this.state = state;
    }

    setState(position){
        this.setPosition(position);
    }
    
}


export const Group1 = {
    chefs:{
        headChef: new Staff(
            "Gordon Ramsey",
            "Head Chef",
            ChefImg1,
            "Renowned for his exceptional culinary skills and expertise in the art of fine dining.",
            ChefProfile1,
        ),
        meatChef: new Staff(
            "Saige Fuentes",
            "Meat Chef",
            ChefImg2,
            "Known for her mastery of meat preparation and grilling techniques.",
            ChefProfile2,
        ),
        fryChef: new Staff(
            "Leighton Kramer",
            "Fry Chef",
            ChefImg4,
            "Expert in the art of frying and deep-frying, creating delightful and crispy dishes.",
            ChefProfile4,
        ),
        pastryChef: new Staff(
            "Dominique Ansel",
            "Pastry Chef",
            ChefImg3,
            "Masters the art of creating delectable pastries and desserts, known for innovative creations.",
            ChefProfile3,
        )
    }
}