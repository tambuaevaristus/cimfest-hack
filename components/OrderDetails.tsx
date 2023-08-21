import React from "react";

export default function OrderDetails() {
  return (
    <div>
      <div className="px-4 pt-2 pb-4 bg-violet-100 rounded-tl-md rounded-tr-md border-b border-gray-700 justify-start items-center w-full inline-flex">
        <div className="justify-start items-center gap-4 flex">
          <div className="w-6 px-0.5 rounded-[100px] border border-black justify-center items-center gap-2 flex">
            <div className="w-5 h-5 relative rounded-[100px]" />
          </div>
          <div className="justify-start items-start gap-3 flex">
            <img
              className="w-[51px] h-[41px] relative rounded-md"
              src="https://via.placeholder.com/51x41"
            />
            <div className="flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch text-gray-700 text-sm font-medium leading-none">
                Doc Name
              </div>
              <div className="w-[81px] justify-start items-start inline-flex">
                <div className="grow shrink basis-0 h-4 justify-start items-start gap-2 flex">
                  <div className="grow shrink basis-0 text-violet-700 text-sm font-normal leading-none">
                    View{" "}
                  </div>
                </div>
                <div className="grow shrink basis-0 text-violet-700 text-sm font-normal leading-none">
                  Save
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 h-[17.35px] justify-between items-start gap-[26px] flex">
          <div className="w-[74.68px] origin-top-left -rotate-1 text-right text-gray-700 text-sm font-normal leading-none">
            4000 xaf
          </div>
          <div className="w-[71.12px] origin-top-left -rotate-1 text-right text-gray-700 text-sm font-normal leading-none">
            x1
          </div>
          <div className="w-[71.43px] origin-top-left -rotate-1 text-right text-gray-700 text-sm font-normal leading-none">
            4000 xaf
          </div>
        </div>
      </div>
      {/* End of btn  */}

      {/* Start of Content */}

      <div className="w-full py-5 pl-[54px] pb-4 justify-start items-center gap-[83px] inline-flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch text-gray-700 text-base font-medium leading-[18px]">
            Specifications
          </div>
          <div className="self-stretch h-[242px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch justify-start items-start gap-6 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-gray-700 text-sm font-medium leading-[18px]">
                  Copies
                </div>
                <div className="self-stretch text-zinc-500 text-sm font-normal leading-none">
                  1
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-gray-700 text-sm font-medium leading-[18px]">
                  Pages
                </div>
                <div className="self-stretch text-zinc-500 text-sm font-normal leading-none">
                  1-3, 8, 11-13
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-6 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-gray-700 text-sm font-medium leading-[18px]">
                  Paper type
                </div>
                <div className="self-stretch text-zinc-500 text-sm font-normal leading-none">
                  Hard sheet
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-gray-700 text-sm font-medium leading-[18px]">
                  Color
                </div>
                <div className="self-stretch text-zinc-500 text-sm font-normal leading-none">
                  Blue
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-6 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-gray-700 text-sm font-medium leading-[18px]">
                  Paper size
                </div>
                <div className="self-stretch text-zinc-500 text-sm font-normal leading-none">
                  A4
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-gray-700 text-sm font-medium leading-[18px]">
                  Orientation
                </div>
                <div className="self-stretch text-zinc-500 text-sm font-normal leading-none">
                  Portrait
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-6 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-gray-700 text-sm font-medium leading-[18px]">
                  Print sides
                </div>
                <div className="self-stretch text-zinc-500 text-sm font-normal leading-none">
                  Recto-verso
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-gray-700 text-sm font-medium leading-[18px]">
                  Print color
                </div>
                <div className="self-stretch text-zinc-500 text-sm font-normal leading-none">
                  Colored
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start items-start gap-6 inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-gray-700 text-sm font-medium leading-[18px]">
                  Number of Pages
                </div>
                <div className="self-stretch text-zinc-500 text-sm font-normal leading-none">
                  1-3, 8, 11-13
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-gray-700 text-sm font-medium leading-[18px]">
                  Color
                </div>
                <div className="self-stretch text-zinc-500 text-sm font-normal leading-none">
                  Blue
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-6 inline-flex">
          <div className="self-stretch h-32 flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch text-gray-700 text-base font-medium leading-[18px]">
              Layout
            </div>
            <div className="self-stretch h-[94px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch justify-start items-start gap-6 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-[9px] inline-flex">
                  <div className="self-stretch text-gray-700 text-sm font-medium leading-[18px]">
                    Pages per sheet
                  </div>
                  <div className="self-stretch text-zinc-500 text-sm font-normal leading-none">
                    2
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-[9px] inline-flex">
                  <div className="self-stretch text-gray-700 text-sm font-medium leading-[18px]">
                    Layout direction
                  </div>
                  <div className="self-stretch text-zinc-500 text-sm font-normal leading-none">
                    2
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[43px] flex-col justify-start items-start gap-[9px] flex">
                <div className="self-stretch text-gray-700 text-sm font-medium leading-[18px]">
                  Margin
                </div>
                <div className="self-stretch text-zinc-500 text-sm font-normal leading-none">
                  1-3, 8, 11-13
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[129px] flex-col justify-start items-start gap-[17px] flex">
            <div className="self-stretch text-gray-700 text-base font-medium leading-[18px]">
              Paper Handling
            </div>
            <div className="self-stretch h-[94px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch justify-start items-start gap-6 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-[9px] inline-flex">
                  <div className="self-stretch text-gray-700 text-sm font-medium leading-[18px]">
                    Print type
                  </div>
                  <div className="self-stretch text-zinc-500 text-sm font-normal leading-none">
                    Booklet
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-[9px] inline-flex">
                  <div className="self-stretch text-gray-700 text-sm font-medium leading-[18px]">
                    Binding
                  </div>
                  <div className="self-stretch text-zinc-500 text-sm font-normal leading-none">
                    Yes
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[43px] flex-col justify-start items-start gap-[9px] flex">
                <div className="self-stretch text-gray-700 text-sm font-medium leading-[18px]">
                  Binding type
                </div>
                <div className="self-stretch text-zinc-500 text-sm font-normal leading-none">
                  Goes here
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
