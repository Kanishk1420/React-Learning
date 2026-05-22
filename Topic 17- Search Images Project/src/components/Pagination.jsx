import {setPage} from '../redux/features/searchSlice'
import { useSelector, useDispatch } from 'react-redux'
const Pagination = () => {
const page = useSelector((state) => state.search.page)
const dispatch = useDispatch()
  return (
    <div className='w-full flex justify-center items-center'>
      <div className="flex justify-center items-center p-4 gap-6">
        <button
          style={{ opacity: page == 1 ? 0.5 : 1, cursor: page == 1 ? "not-allowed" : "pointer" }}
          className="bg-blue-700 text-white rounded px-4 py-2 text-sm cursor-pointer uppercase"
          onClick={() => {
              if (page > 1) {
                  dispatch(setPage(page - 1))
                }
            }}
            >
          Prev
        </button>
        <h2>{page}</h2>
        <button
          className="bg-blue-700 text-white rounded px-4 py-2 text-sm cursor-pointer uppercase"
          onClick={() => {
              dispatch(setPage(page + 1))
            }}
            >
          Next
        </button>
      </div>
    </div>
  )
}

export default Pagination