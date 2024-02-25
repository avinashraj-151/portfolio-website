import image1 from '../assets/person1.png'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Card from './Card';

const reviews = [{
    id: 1,
    name: "Juliana Silva",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum leo tellus, eget blandit urna consequat sit amet. ",
    image: image1
}, {
    id: 2,
    name: "Daniel Gallego",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum leo tellus, eget blandit urna consequat sit amet. ",
    image: image1
}, {
    id: 3,
}, {
    id: 4,
}, {
    id: 5,
}, {
    id: 6,
}, {
    id: 7,
}
]

const Autoplay = autoPlay(SwipeableViews);
function ReviewCard() {
    return (
        <div className='shadow-md shadow-red-800'>
            <Autoplay>

                {
                    reviews.map((review, index) => {
                        return (
                            <div key={index} className='grid lg:grid-cols-1 gap-4 sm:grid-cols-1 grid-cols-1'>
                                <Card index={(index) % reviews.length}></Card>
                                {/* <Card index={(index + 1) % reviews.length}></Card>
                                <Card index={(index + 2) % reviews.length}></Card> */}
                            </div>
                        )
                    })
                }
            </Autoplay>
        </div>
    )
}

export default ReviewCard


{/* <div className='shadow-lg rounded-md px-8 py-8'>
                <div className='flex gap-8'>
                    <img src={image1} className='w-28 h-28'></img>
                    <div className="flex flex-col mt-5">
                        <p className="font-bold text-xl mb-2">Juliana Silva</p>
                        <p className="text-sm">Our Clients</p>
                    </div>
                </div>
                <p className='mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum leo tellus, eget blandit urna consequat sit amet. </p>
            </div> */}