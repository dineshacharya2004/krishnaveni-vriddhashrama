"use client";
import React, { useState } from "react";
import { tabData } from "~/constants";
import { Button } from "~/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";


const RolesAndDescriptions = () => {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  const openDrawer = (tabTitle: string) => {
    setSelectedTab(tabTitle);
  };
  const closeDrawer = () => {
    setSelectedTab(null);
  };
  const sendEmail = () => {
    const email = "info@kvdhama.com";
    window.location.href = `mailto:${email}`;
  };

  return (
    <section className="flex gap-1">
      <div className="flex flex-wrap justify-center">
        {tabData.map((tab) => (
          <div key={tab.id} className="flex justify-center m-1">
            <button
              className="p-2 border border-black rounded-md w-max text-md md:text-2xl font-bold  bg-primary-200  hover:bg-primary-100 hover:shadow-lg focus:outline-none transform hover:scale-105 transition duration-300"
              onClick={() => openDrawer(tab.title)}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </div>
      <Drawer open={selectedTab !== null} onClose={closeDrawer}>
        {selectedTab && (
          <>
            <DrawerContent className="bg-primary-100 leading-relaxed">
              <div className="mx-auto w-full max-w-lg">
                <DrawerHeader>
                  <DrawerTitle className="title ">{selectedTab}</DrawerTitle>

                  <DrawerDescription className="text-md font-semibold">
                    -{" "}
                    {
                      tabData.find((item) => item.title === selectedTab)
                        ?.jobRole
                    }
                  </DrawerDescription>
                  <div className="flex  flex-col md:flex-row items-center gap-2 border border-black p-2 rounded-2xl ">
                    <h1 className="font-bold text-lg ">Elegibility:</h1>

                    <h2 className="text-md">
                      {
                        tabData.find((item) => item.title === selectedTab)
                          ?.eligibility
                      }
                    </h2>
                  </div>
                </DrawerHeader>

                <DrawerFooter>
                  <Button onClick={sendEmail}>Send Email</Button>
                  <DrawerClose asChild>
                    <Button
                      onClick={closeDrawer}
                      className="border border-black bg-white hover:bg-gray-300"
                    >
                      Close
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </>
        )}
      </Drawer>
    </section>
  );
};

export default RolesAndDescriptions;