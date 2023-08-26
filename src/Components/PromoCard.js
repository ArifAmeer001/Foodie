import '../App.css';

const PromoCard = (props) => {
    return(
        <>
        <li class="promo-item">
            <div className="promo-card">

                <div className="card-icon">
                <svg width="60" height="60" fill="none">
                    <g clipPath="url(#A)" fill="#ff9d2d">
                    <path
                        d = {props.cardIcon}
                    />
                    </g>
                    <defs>
                    <clipPath id="A">
                        <path fill="#fff" d="M0 0h60v60H0z" />
                    </clipPath>
                    </defs>
                </svg>
                </div>


                <h3 className="h3 card-title">{props.title}</h3>
                <p className="card-text">
                {props.paragraph}
                </p>

                <img src={`./images/promo-${props.img}.png`} width="300" height="300" loading="lazy" alt="Maxican Pizza"
                className="w-100 card-banner"/>

            </div>
        </li>
        </>
    );
}

export default PromoCard