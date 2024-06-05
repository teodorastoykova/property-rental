import PropertySearchForm from '@/components/PropertySearchForm';
import Properties from '@/components/Properties';
import Property from '@/models/Property';
import connectDB from '@/config/database';

const PropertiesPage = ({ properties, total, page, pageSize }) => {
  return (
    <>
      <section className='bg-blue-700 py-4'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
          <PropertySearchForm />
        </div>
      </section>
      <Properties
        properties={properties}
        total={total}
        page={page}
        pageSize={pageSize}
      />
    </>
  );
};

export async function getServerSideProps(context) {
  await connectDB();

  const { pageSize = 6, page = 1 } = context.query;

  const skip = (parseInt(page) - 1) * parseInt(pageSize);

  const total = await Property.countDocuments({});
  const properties = await Property.find({}).skip(skip).limit(parseInt(pageSize));

  return {
    props: {
      properties: JSON.parse(JSON.stringify(properties)),
      total,
      page: parseInt(page),
      pageSize: parseInt(pageSize),
    },
  };
}

export default PropertiesPage;
