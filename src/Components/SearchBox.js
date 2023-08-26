import '../App.css';
import { IonIcon } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';

const SearchBox = () => {

    return(
        <div class="search-container" data-search-container>

            <div className="search-box">
            <input type="search" name="search" aria-label="Search here" placeholder="Type keywords here..."
                className="search-input"/>

            <button className="search-submit" aria-label="Submit search" data-search-submit-btn>
                <IonIcon icon={searchOutline}></IonIcon>
            </button>
            </div>

            <button className="search-close-btn" aria-label="Cancel search" data-search-close-btn></button>

        </div>
    );
}

export default SearchBox