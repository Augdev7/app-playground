/* eslint-disable @typescript-eslint/no-unused-vars */
import { notFound } from 'next/navigation';
import React from 'react';

import { getCategories } from '#/app/api/categories/getCategories';
import { ClickCounter } from '#/ui/click-counter';
import { TabGroup } from '#/ui/tab-group';

export const metadata = {
    title: 'Loading',
};

export default async function Layout({ children }: { children: React.ReactNode }) {
    const categories = await getCategories();

    return (
        <div className="space-y-9">
            <div className="flex justify-between">
                <TabGroup
                    path="/loading"
                    items={[
                        {
                            text: 'Home',
                        },
                        ...categories.map(x => ({
                            text: x.name,
                            slug: x.slug,
                        })),
                    ]}
                />

                <div className="self-start">
                    <ClickCounter />
                </div>
            </div>

            <div>{children}</div>
        </div>
    );
}
