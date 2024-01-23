import useHouses from "../../Hooks/useHouses";
import House from "./House";


const AllHouses = () => {
    const [houses] = useHouses();
    return (
        <div id="all_house" className="container mx-auto px-2 lg:px-0 py-24">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
                <h3 className="text-3xl font-semibold">Accommodation Avenue</h3>
                <p>Explore a world of possibilities as Accommodation Avenue unfolds before you, revealing a tapestry of exceptional rentals where every stay is an invitation to create a personalized narrative, uniquely tailored to your desires and dreams.</p>
            </div>
            <div className="space-y-10">
                {
                    houses.map(house => <House key={house._id} house={house} />)
                }
            </div>
        </div>
    );
};

export default AllHouses;