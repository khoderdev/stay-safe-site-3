import CarbonFootprintCalculator from '../components/calculator/carbon-footprint/CarbonFootprint'

export default function EnvirementalHealth() {
  return (
    <div className="flex flex-col">
      <div className="section pt-16 bg-white-bg dark:bg-black">
        <CarbonFootprintCalculator />
      </div>

    </div>
  );
}
