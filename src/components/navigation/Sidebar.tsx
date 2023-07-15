import meditation from "@/assets/svg/meditation.svg";
import swim from "@/assets/svg/swimming.svg";
import bike from "@/assets/svg/biking.svg";
import bodyBuilding from "@/assets/svg/dumbbell.svg";

export const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className="icons">
				<i className='sidebar-icon'><img title='image' src={meditation}></img></i>
				<i className='sidebar-icon'><img title='image' src={swim}></img></i>
				<i className='sidebar-icon'><img title='image' src={bike}></img></i>
				<i className='sidebar-icon'><img title='image' src={bodyBuilding}></img></i>
			</div>

			<p className='copyright'>Copyright, SportSee 2020</p>
		</div>
	);
}