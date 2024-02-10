import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'
interface BreadcrumbProps {
  pageName: string;
  pages?: string[];
  previousPageUrl?: string;
}

const Breadcrumb = ({ pageName, pages = [], previousPageUrl }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {!!previousPageUrl
        ? (
          <>
            <Link href={previousPageUrl}>
              <FontAwesomeIcon cursor="pointer" icon={faArrowLeft} />
            </Link>
            <span className="ml-3">{pageName}</span>
          </>
        ) : pageName}
      </h2>
      
      {pages.length > 0 && (
        <nav>
          <ol className="flex items-center gap-2">
            {pages.map((page, index) => {
              return (
                <li
                  key={index}
                  className={`font-medium ${index == pages.length - 1 && 'text-primary'}`}
                >
                  {page} {index < pages.length - 1 && '/'}
                </li>
              )
            })}
          </ol>
        </nav>
      )}
    </div>
  );
};

export default Breadcrumb;
