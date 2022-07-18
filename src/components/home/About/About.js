import "./css/about.css";
import { Ornament } from './../../Ornament';

export function About() {

    return (
        <div className="about" id="about">
            <div className="about-left">
                <div className="about-title">
                    <Ornament title="O nas"/>
                </div>
                <div className="about-text">
                    Nori grape silver beet broccoli kombu
                    beet greens fava bean potato quandong
                    celery. Bunya nuts black-eyed pea prairie
                    turnip leek lentil turnip greens parsnip.
                    <div className="about-signature"/>
                </div>
            </div>
            <div className="about-right"/>
        </div>
    )
}