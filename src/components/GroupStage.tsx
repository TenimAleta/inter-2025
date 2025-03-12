import React from 'react';
import { groups } from '../data/tournament';

export const GroupStage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {groups.map((group, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 text-white px-4 py-2">
            <h3 className="text-lg font-bold">GRUP {index + 1}</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50 text-xs">
                  <th className="px-4 py-2 text-left">Equip</th>
                  <th className="px-2 py-2 text-center">PJ</th>
                  <th className="px-2 py-2 text-center">PG</th>
                  <th className="px-2 py-2 text-center">PE</th>
                  <th className="px-2 py-2 text-center">PP</th>
                  <th className="px-2 py-2 text-center">GF</th>
                  <th className="px-2 py-2 text-center">GC</th>
                  <th className="px-2 py-2 text-center">Pts</th>
                </tr>
              </thead>
              <tbody>
                {group.map((team, teamIndex) => (
                  <tr 
                    key={team.name} 
                    className={`
                      ${teamIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                      hover:bg-gray-100 transition-colors
                    `}
                  >
                    <td className="px-4 py-2 text-sm font-medium">{team.name}</td>
                    <td className="px-2 py-2 text-center text-sm">{team.played}</td>
                    <td className="px-2 py-2 text-center text-sm">{team.won}</td>
                    <td className="px-2 py-2 text-center text-sm">{team.drawn}</td>
                    <td className="px-2 py-2 text-center text-sm">{team.lost}</td>
                    <td className="px-2 py-2 text-center text-sm">{team.goalsFor}</td>
                    <td className="px-2 py-2 text-center text-sm">{team.goalsAgainst}</td>
                    <td className="px-2 py-2 text-center text-sm font-bold">{team.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};