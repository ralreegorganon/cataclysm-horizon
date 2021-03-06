import * as _ from 'lodash'

/**
 * Definitions about how to render certain game objects into 3D objects.
 */
export class VoxelTileset {
  dontDraw(terrainId: string): boolean {
    return terrainId === 't_open_air'
  }

  isCube(terrain: string): boolean {
    return false
  }

  height(terrain: string): number {
    const low_height = ['t_shrub']
    if (_.find(low_height, item => terrain.startsWith(item))) {
      return 0.2
    }

    const half_height = ['t_fence', 't_chainfence', 't_bush']
    if (_.find(half_height, item => terrain.startsWith(item))) {
      return 0.5
    }

    const whitelist = [
      't_wall',
      't_door',
      't_window',
      't_curtain',
      't_reinforced_glass',
      't_brick_wall',
      't_tree',
    ]
    if (_.find(whitelist, item => terrain.startsWith(item))) {
      return 1
    }

    return 0
  }
}

export const voxelTileset = new VoxelTileset()
