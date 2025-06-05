import Card from "./Card.jsx";

const Museums = () => {

    const museums = [
        {
            museum: "Asian Art Museum",
            address: "200 Larkin St, San Francisco, CA 94102",
            weekdays: "Free First Sunday of the month",
            description: "The Asian Art Museum of San Francisco – Chong-Moon Lee Center for Asian Art and Culture is a museum in San Francisco, California that specializes in Asian art. It was founded by Olympian Avery Brundage in the 1960s and has more than 18,000 works of art in its permanent collection, some as much as 6,000 years old. ",
            website: "https://about.asianart.org/ticketing/free-and-reduced-museum-admission/",
            image: "https://sfciviccenter.org/wp-content/uploads/2020/11/Untitled-4.jpg"
        },
        {
            museum: "Legion of Honor",
            address: "100 34th Ave, San Francisco, CA 94121",
            weekdays: "Free First Tuesday of the month, Every Saturday for Bay Area residents",
            description: "The Legion of Honor, formally known as the California Palace of the Legion of Honor, is an art museum located in San Francisco, on the West Side of the city. Located in Lincoln Park, the Legion of Honor is a component of the Fine Arts Museums of San Francisco, which also administers the de Young Museum ",
            website:"https://www.famsf.org/visit/free-reduced-admission",
            image: "https://www.famsf.org/storage/images/d9c1d718-e3c8-4798-9da1-09d8c0d6ce42/627-legion-covid2-social-garysexton-10-29-20.jpg?crop=6286,3531,x237,y888&format=jpg&quality=80&width=1000"
        },
        {
            museum: "de Young Museum",
            address: "50 Hagiwara Tea Garden Dr, San Francisco, CA 94118",
            weekdays: "Free First Tuesday of the month, Every Saturday for Bay Area residents",
            description: "The de Young Museum, formally the M. H. de Young Memorial Museum, is a fine arts museum located in San Francisco, California, named for early San Francisco newspaperman M. H. de Young.",
            website: "https://www.famsf.org/visit/free-reduced-admission",
            image: "https://motion8films.com/wp-content/uploads/2021/08/12045384_10153021040741930_3087097959298469944_o-1024x683.jpeg"
        },
        {
            museum: "Museum of Craft and Design",
            address: "2569 3rd St, San Francisco, CA 94107",
            weekdays: "Free First Thursday of the month",
            description: "Gallery showcasing a variety of contemporary craft & design work with monthly events & a gift shop.",
            website: "https://sfmcd.org/event-listing/free-first-thursdays/",
            image: "https://sfmcd.org/wp-content/uploads/2023/05/MOCAD-2023-0171_1920.900.png"
        },
        {
            museum: "SFMOMA",
            address: "151 Third Street, San Francisco",
            weekdays: "Free First Thursday of the month for Bay Area residents",
            description: "Gallery showcasing a variety of contemporary craft & design work with monthly events & a gift shop.",
            website: "https://www.sfmoma.org/free-days/",
            image: "https://d1hhug17qm51in.cloudfront.net/www-media/2018/08/03012116/4__The_new_SFMOMA_view_from_Yerba_Buena_Gardens__photo_Jon_McNeal-scaled.jpg"
        },
                {
            museum: "Conservatory of Flowers",
            address: "100 John F Kennedy Dr, San Francisco, CA 94118",
            weekdays: "Free First Tuesday of the month, Everyday for San Francisco residents",
            description: "The Conservatory of Flowers is a greenhouse and botanical garden that houses a collection of rare and exotic plants in Golden Gate Park, San Francisco, California. With construction having been completed in 1879, it is the oldest building in the park. ",
            website: "https://gggp.org/tickets/",
            image: "https://drupal-prod.visitcalifornia.com/sites/default/files/styles/fluid_1920/public/VC_MustSeeGardens_Module2_SanFranConservatory_Stock_RF_140459136_1280x640.jpg.webp?itok=cGjW4FbD"
        },
                        {
            museum: "Japanese Tea Garden",
            address: "75 Hagiwara Tea Garden Dr, San Francisco, CA 94118",
            weekdays: "Free First Monday, Wednesday, and Friday of the month from 9 am to 10 am, Everyday for San Francisco residents",
            description: "The Japanese Tea Garden in San Francisco, California, is a popular feature of Golden Gate Park, originally built as part of a sprawling World's Fair, the California Midwinter International Exposition of 1894.",
            website: "https://gggp.org/tickets/",
            image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/a2/1d.jpg"
        },
                                {
            museum: "Yerba Buena Center for the Arts",
            address: "701 Mission St, San Francisco, CA 94103",
            weekdays: "Free Wednesdays, Everyday for San Francisco residents",
            description: "Yerba Buena Center for the Arts is a multi-disciplinary contemporary arts center in San Francisco, California, United States. Located in Yerba Buena Gardens, YBCA features visual art, performance, and film/video that celebrates local, national, and international artists and the Bay Area's diverse communities.",
            website:"https://ybca.org/visit/",
            image: "https://cdn.sfstation.com/assets/images/businesses/53/3531292186800_orig.png"
        },
                                        {
            museum: "San Francisco Botanical Garden",
            address: "1199 9th Ave, San Francisco, CA 94122",
            weekdays: "Free Second Tuesday of the month, Everyday for San Francisco residents",
            description: "The San Francisco Botanical Garden at Strybing Arboretum is located in San Francisco's Golden Gate Park.",
            website:"https://gggp.org/tickets/",
            image: "https://gggp.org/wp-content/uploads/2023/08/home-hero.jpg"
        },
                                               {
            museum: "Museum of the African Diaspora (MoAD)",
            address: "685 Mission St, San Francisco, CA 94105",
            weekdays: "Free Second Saturday of the month",
            description: "The Museum of the African Diaspora is a contemporary art museum in San Francisco, California. MoAD holds exhibitions and presents artists exclusively of the African diaspora, one of only a few museums of its kind in the United States.",
            website:"https://www.moadsf.org/visit",
            image: "https://cdnassets.hw.net/eb/29/f3b402a341e2a1898c7f4105152a/download.jpg"
        }
    ];

    return (
        <div className="flex-container">
            {museums.map((museum, idx) => (
                <Card key={idx} {...museum} />
            ))}
        </div>
    );
}

export default Museums