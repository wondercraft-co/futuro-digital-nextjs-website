import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Banner() {
  return (
    <div className="flex items-center justify-center gap-x-6 bg-indigo-600 px-6 py-2.5 sm:px-3.5 ">
      <p className="text-sm leading-6 text-white text-center">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScCR4hHeL15IrqodETJ9V9M8eDuY6xV4qfCXe2XBtE7Mre6PQ/viewform?usp=sf_link"
          target="_blank"
        >
          <strong className="font-semibold">Futuro Digital Beta</strong>
          <svg
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          Inscripciones abiertas, cupos limitados{" "}
          <span aria-hidden="true">&rarr;</span>
        </a>
      </p>
    </div>
  );
}
