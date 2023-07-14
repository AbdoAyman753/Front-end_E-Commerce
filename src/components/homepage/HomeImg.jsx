import home from '../../assets/img/home.gif';
import Logo from '../ui/Logo';
import { Link } from 'react-router-dom';
const HomeImg = () => {
	return (
		<div
			className='img_home h-[86vh] bg-no-repeat w-full bg-cover'
			style={{ backgroundImage: `url(${home})` }}
		>
			<div className='font-extrabold text-8xl text-white font-mono z-10 flex justify-center mt-48'>
				<div className='flex-col justify-center items-center'>
					<p>Welcome</p>
					<Link to='/store'>
						<Logo
							className={
								'text-center border-white border rounded-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg inset-0 z-10 text-7xl hover:scale-[102%] hover:bg-slate-800'
							}
							numClass={'text-7xl'}
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomeImg;
