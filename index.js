
var engine = require('voxel-engine')
require('voxel-land')
require('voxel-plugins-ui')
//require('voxel-airjump')
//require('voxel-keys')

window.util = require('util')


var engineOpts = {
	appendDocument: true,
	exposeGlobal: true,
	lightsDisabled: true,
	arrayTypeSize: 2,
	useAtlas: true,
	generateChunks: false,
//	generate:'Valley',
	chunkDistance: 2,
	worldOrigin: [0, 0, 0],
	controls: {
		discreteFire: false,
		fireRate: 100,
		jumpTimer: 25
	}
	
}

var game = engine({
	require: require,
	exposeGlobal: true,
	pluginOpts: {
		'voxel-engine': engineOpts,
		'voxel-registry': {},
		'voxel-stitch': { artpacks: ['ProgrammerArt-ResourcePack.zip'] },
		'game-shell-fps-camera': {},
		'voxel-shader': { cameraFOV: 90 },
		'voxel-mesher': {},
		'voxel-land': {populateTrees: true},
		'voxel-plugins-ui': { autoBlur: true, guiWidth:500 },
//    'voxel-keys': {},
//    'voxel-airjump': { allowedJumps: 3 },

	}
})



