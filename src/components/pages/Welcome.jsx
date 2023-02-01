import '../css/Welcome.css'
import 'bulma/css/bulma.min.css'
import { useNavigate } from 'react-router-dom';

export default function Welcome() {

	let navigate = useNavigate();
	const routeChange = () =>{ 
	  let path = `/items`; 
	  navigate(path);
	}

	return (
		<div>
			<div>
			<figure class="image is-3by1 img">
				<img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMGRlY29yYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
			</figure>


				{/* <img src='img/images.jpeg' className='img' /> */}
			</div>

			<div class="columns">
				<div class="column">
					<div id="cardtext1">
						<strong className='p-3'>Reliable</strong>
						<div className='sub-text p-3'>
							World's #1 home planner and development <br />
							Obtain inspiration with people all around the world from cultural decoration to technology and advancement!
						</div>
					</div>
				</div>
				<div class="column">
					<div id="cardtext2">
						<strong className='p-3'>Resourceful</strong>
						<div className='sub-text p-3'>
							Create your dream home by ensuring all resources and essentials needed in your home! Develop all the improvements needed in your home and impress your friends and family.
						</div>
					</div>
				</div>
				<div class="column">
					<div id="cardtext3">
					<strong className='p-3'>Renewable</strong>
					<div className='sub-text p-3'>
						Keep up with society! <br />
						Make sure you get the latest modern technology and strive for longevity! Recreate your house and transform into a home.
					</div>
				</div>
				</div>
				<div class="column">
						<div>
							<div id="cardtext4">
							<strong className='p-3'>Reformed</strong>
							<div className='sub-text p-3'>
							Life starts from the home! 
							Start the improvement here and make a change!
						</div>
						

						<div>
							<button 
							className='button margin'
							onClick={routeChange}
							>
							Start now</button>
						</div>
						
					</div>
				</div>
				</div>
			</div>



			<div className='cards'>
				
				
				
			
			</div>


			{/* <div class='cards'>
				<div id="articletext1">
					<strong>Reliable</strong>
					<div className='sub-text'>
						
					</div>
				</div>
				<div id="articletext2">
					<strong>Reliable</strong>
					<div className='sub-text'>
						
					</div>
				</div>
				<div id="articletext3">
					<strong>Reliable</strong>
					<div className='sub-text'>
						
					</div>
				</div>
				<div id="articletext4">
					<strong>Reliable</strong>
					<div className='sub-text'>
						
					</div>
				</div>
			</div> */}
		</div>
	)
}