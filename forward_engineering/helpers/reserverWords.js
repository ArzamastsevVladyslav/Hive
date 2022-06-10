
const RESERVED_WORDS = [
	'user', 'all', 'alter', 'and', 'array', 'as', 'authorization', 'between', 'bigint', 'binary', 
	'boolean', 'both', 'by', 'case', 'cast', 'char', 'column', 'conf', 'create', 'cross', 'cube', 
	'current', 'current_date', 'current_timestamp', 'cursor', 'database', 'date', 'decimal', 'delete', 
	'describe', 'distinct', 'double', 'drop', 'else', 'end', 'exchange', 'exists', 'extended', 'external', 
	'false', 'fetch', 'float', 'following', 'for', 'from', 'full', 'function', 'grant', 'group', 'grouping', 
	'having', 'if', 'import', 'in', 'inner', 'insert', 'int', 'intersect', 'interval', 'into', 'is', 'join', 
	'lateral', 'left', 'less', 'like', 'local', 'macro', 'map', 'more', 'none', 'not', 'null', 'of', 'on', 'or', 
	'order', 'out', 'outer', 'over', 'partialscan', 'partition', 'percent', 'preceding', 'preserve', 'procedure', 
	'range', 'reads', 'reduce', 'revoke', 'right', 'rollup', 'row', 'rows', 'select', 'set', 'smallint', 'table', 
	'tablesample', 'then', 'timestamp', 'to', 'transform', 'trigger', 'true', 'truncate', 'unbounded', 'union', 
	'uniquejoin', 'update', 'using', 'utc_tmestamp', 'values', 'varchar', 'when', 'where', 'window', 'with',
	'commit', 'only', 'regexp', 'rlike', 'rollback', 'start',
	'cache', 'constraint', 'foreign', 'primary', 'references',
	'dayofweek', 'extract', 'floor', 'integer', 'precision', 'views',
	'time', 'numeric', 'sync', 'dec'
];

module.exports = RESERVED_WORDS;
