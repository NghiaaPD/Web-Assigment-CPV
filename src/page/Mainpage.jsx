import Webcam from "react-webcam";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Mainpage() {
    return (
        <>
            <div className="relative h-screen w-scrren">
                <body className="h-screen bg-gradient-to-r from-[#EAD6EE] to-[#A0F1EA]">
                    <div className="relative flex items-center justify-center">
                        <Tabs defaultValue="account" className="h-[800px] w-[800px] bg-opacity-50 mt-8">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="account">Deep learning</TabsTrigger>
                                <TabsTrigger value="password">Traditional algorithm</TabsTrigger>
                            </TabsList>
                            <TabsContent value="account">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Deep learning</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Webcam className="w-[1500px] rounded-lg"></Webcam>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="password">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Traditional algorithm</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Webcam className="w-[1500px] rounded-lg"></Webcam>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </body>
            </div>
        </>
    )
}