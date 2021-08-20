import Planets from '../components/Planets';
import DwrafPlanets from '../components/DwrafPlanets';

export default function explore() {
	return (
		<>
			<Planets title="Explore Planets" paddingY={false} />

			<hr />

			<DwrafPlanets title="Explore Dwraf Planets" paddingY={true} />
		</>
	);
}
