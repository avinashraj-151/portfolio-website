import LinkedIn from '@mui/icons-material/LinkedIn'
import image1 from '../assets/person1.png'
const reviews = [
    {
        id: 1,
        name: "Impressed Developer",
        review: "Avinash is an incredibly skilled developer with a strong foundation in web technologies. His proficiency in React js, HTML5, and CSS is commendable. He tackles challenges with strategic analysis and delivers effective solutions. Working with him has been a pleasure.",
        image: image1
    },
    {
        id: 2,
        name: "Coding Maestro",
        review: "I had the pleasure of collaborating with Avinash on several coding platforms. His Leetcode and CodeChef ratings speak volumes about his coding prowess. A determined coder, he consistently achieves high contest ratings. It's inspiring to work alongside someone with such dedication.",
        image: image1
    },
    {
        id: 3,
        name: "Dynamic Team Player",
        review: "Avinash brings dynamic energy to our team. His versatility in programming languages, including C++, Python, and JavaScript, ensures a well-rounded skill set. His commitment to continuous improvement is evident, making him a valuable asset in any workspace.",
        image: image1
    },
    {
        id: 4,
        name: "Effective Problem Solver",
        review: "I've witnessed Avinash's problem-solving skills firsthand, and they are exceptional. His achievements on platforms like GeekForGeeks and HackerRank showcase his ability to navigate complex coding challenges with ease. A reliable team member with a knack for solutions.",
        image: image1
    },
    {
        id: 5,
        name: "Tech Enthusiast",
        review: "Avinash is not just a coder; he's a tech enthusiast. His expertise in data management tools such as MySQL, MongoDB, and Oracle adds depth to his skill set. His commitment to staying updated on the latest technologies makes him a valuable asset to any tech team.",
        image: image1
    },
    {
        id: 6,
        name: "Detail-Oriented Professional",
        review: "Working with Avinash has been a pleasure due to his detail-oriented approach. He excels in creating engaging user interfaces and pays meticulous attention to every project's intricacies. His commitment to quality work is truly commendable.",
        image: image1
    },
    {
        id: 7,
        name: "Motivated and Responsible",
        review: "Avinash is a highly motivated individual with a strong sense of responsibility. His achievements in academics, represented district in Kabaddi, and active participation in extracurricular activities showcase his well-rounded personality. A reliable and enthusiastic team member.",
        image: image1
    }
];
function Card({ index }) {
    return (
        <div className='px-8 py-8 overflow-hidden flex flex-col'>
            <p className='mt-5 text-xl px-2 py-4'>{reviews[index].review}</p>
            <div className='flex gap-8'>
                <img src={reviews[index].image} className='w-28 h-28'></img>
                <div className="flex flex-col mt-5 gap-2">
                    <p className="font-bold text-xl">{reviews[index].name}</p>
                    <LinkedIn class='cursor-pointer w-8'></LinkedIn>
                </div>
            </div>
        </div>
    )
}

export default Card