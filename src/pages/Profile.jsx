import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { getProfile } from "../services/profileService";

function Profile() {

    const [profile, setProfile] = useState(null);

    useEffect(() => {

        loadProfile();

    }, []);

    const loadProfile = async () => {

        try {

            const response = await getProfile();

            setProfile(response.data);

        }

        catch (error) {

            console.error(error);

        }

    };

    if (!profile) {

        return (

            <MainLayout>

                <h1 className="text-white text-2xl">

                    Loading...

                </h1>

            </MainLayout>

        );

    }

    return (

        <MainLayout>

            <div className="max-w-4xl mx-auto">

                <div className="bg-slate-800 rounded-2xl p-8">

                    <h1 className="text-4xl font-bold mb-8">

                        My Profile

                    </h1>

                    <div className="grid md:grid-cols-2 gap-6">

                        <ProfileItem title="Full Name" value={profile.fullName} />

                        <ProfileItem title="Username" value={profile.username} />

                        <ProfileItem title="Email" value={profile.email} />

                        <ProfileItem title="Phone" value={profile.phone} />

                        <ProfileItem title="College" value={profile.college} />

                        <ProfileItem title="Branch" value={profile.branch} />

                        <ProfileItem title="Passout Year" value={profile.passoutYear} />

                        <ProfileItem title="Github" value={profile.github} />

                        <ProfileItem title="LinkedIn" value={profile.linkedin} />

                    </div>

                    <div className="mt-8">

                        <h3 className="font-bold text-xl">

                            Bio

                        </h3>

                        <p className="text-gray-300 mt-2">

                            {profile.bio}

                        </p>

                    </div>

                </div>

            </div>

        </MainLayout>

    );

}

function ProfileItem({ title, value }) {

    return (

        <div>

            <label className="text-gray-400">

                {title}

            </label>

            <p className="text-xl font-semibold">

                {value || "-"}

            </p>

        </div>

    );

}

export default Profile;