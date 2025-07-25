import { useParams } from "react-router-dom";
import { portfolioData } from "../constants/PortofolioData";
import { ChevronLeft, ChevronRight, List } from "lucide-react";
import placeholderImage from "../assets/placeholderImage.png";

const PortofolioDetailPage = () => {
  const { id } = useParams();
  const portofolio = portfolioData.find((p) => p.id == id);
  const isFirst = id == 1;
  const isLast = id == portfolioData.length;

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = placeholderImage;
  };

  const getRandomSpan = () => {
    const spanOptions = [1, 2];
    const colSpan = spanOptions[Math.floor(Math.random() * spanOptions.length)];
    const rowSpan = spanOptions[Math.floor(Math.random() * spanOptions.length)];
    return { colSpan, rowSpan };
  };

  const PreviousButton = () => (
    <a
      href={`/portfolio/${parseInt(id) - 1}`}
      className="inline-flex items-center justify-center py-3 px-5 text-base font-medium text-mid-dark bg-white rounded-lg hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 gap-5 shadow-md"
    >
      <ChevronLeft className="text-mid-dark" /> Previous
    </a>
  );

  const NextButton = () => (
    <a
      href={`/portfolio/${parseInt(id) + 1}`}
      className="inline-flex items-center justify-center py-3 px-5 text-base font-medium text-mid-dark bg-white rounded-lg hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 gap-5 shadow-md"
    >
      Next
      <ChevronRight className="text-mid-dark" />
    </a>
  );

  const PortofolioListButton = () => (
    <a
      href="/our-portfolio"
      className="inline-flex items-center justify-center py-3 px-5 text-base font-medium text-mid-dark bg-white rounded-lg hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 gap-5 shadow-md"
    >
      <List className="text-mid-dark" />
      Portfolio List
    </a>
  );

  return (
    <div className="w-full h-full flex flex-col bg-white">
      <section className="w-full bg-white">
        <div className="flex flex-col md:max-w-screen-xl w-full md:py-20 py-10 px-5 md:px-0 items-start justify-center mx-auto md:gap-5 gap-5 md:px-20">
          {/* Buttons */}
          <div className="flex flex-row gap-5 mt-10">
            {!isFirst && <PreviousButton />}
            <PortofolioListButton />
            {!isLast && <NextButton />}
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row md:gap-10 gap-5 items-center">
              <div className="px-5 py-2 bg-accent/20 rounded-lg">
                <h5 className="text-accent">{portofolio.kind.toUpperCase()}</h5>
              </div>
              <h6 className="text-mid-dark">{portofolio.date}</h6>
            </div>
            <h2 className="text-dark mt-4">{portofolio.name}</h2>
            <p className="text-gray-600 max-w-2xl">{portofolio.description}</p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-2 auto-rows-[150px] gap-2 w-full">
            {portofolio.images.map((img, index) => {
              const { colSpan, rowSpan } = getRandomSpan();
              return (
                <img
                  key={index}
                  src={img}
                  onError={handleImageError}
                  alt={`Portfolio ${index}`}
                  className={`object-cover w-full h-full rounded ${
                    colSpan === 2 ? "col-span-2" : "col-span-1"
                  } ${rowSpan === 2 ? "row-span-2" : "row-span-1"}`}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortofolioDetailPage;
